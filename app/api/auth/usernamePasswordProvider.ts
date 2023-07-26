import { prisma } from '@/lib/prisma';
import { compare } from 'bcryptjs';

export interface CredentialsProvider {
  id: string;
  name: string;
  authorize: (credentials: { username: string; password: string }) => Promise<User | null>;
  signIn: (credentials: { username: string; password: string }) => Promise<User | null>;
  getUserByEmail: (email: string) => Promise<User | null>;
  checkCredentials: (credentials: { username: string; password: string }) => Promise<User | null>;
}

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  password: string;
};


const UsernamePasswordProvider: CredentialsProvider = {
  id: "username-password",
  name: "Username & Password",
  authorize: async (credentials) => {
    // Check the provided credentials and return the user object or null
    const user = await prisma.user.findUnique({
      where: { email: credentials.username },
    });

    if (!user || !user.password) {
      return null;
    }

    const isPasswordValid = await compare(
      credentials.password,
      user.password
    );

    if (!isPasswordValid) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    } as User;
  },
  signIn: async (credentials) => {
    // Perform the sign-in operation using the provided credentials and return the user object or null
    const user = await prisma.user.findUnique({
      where: { email: credentials.username },
    });
  
    if (!user || !user.password) {
      return null;
    }
  
    const isPasswordValid = await compare(credentials.password, user.password);
  
    if (!isPasswordValid) {
      return null;
    }
  
    return {
      id: user.id,
      name: user.name || null,
      email: user.email || null,
      password: user.password,
    };
  },
  getUserByEmail: async (email: string): Promise<User | null> => {
    // Get the user by email and return the user object or null
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return { id: user.id, name: user.name, email: user.email } as User;
    }
    return null;
  },
  checkCredentials: async (credentials: { username: string; password: string }): Promise<User | null> => {
    // Check the provided credentials without authenticating the user and return the user object or null
    const user = await prisma.user.findUnique({
      where: { email: credentials.username },
    });

    if (!user || !user.password) {
      return null;
    }

    const isPasswordValid = await compare(credentials.password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return {
      id: user.id,
      name: user.name || null,
      email: user.email || null,
      password: user.password,
    };
  },
};

export default UsernamePasswordProvider;
