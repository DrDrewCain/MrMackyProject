const { google } = require("googleapis");

const credentials = require("./credentials.json");

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

async function authenticate() {
  const { client_secret, client_id, redirect_uris } = credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  console.log("Authorize this app by visiting this url:", authUrl);

  // Use an external service or input the code manually
  const code = "paste-your-code-here";

  const { tokens } = await oAuth2Client.getToken(code);

  oAuth2Client.setCredentials(tokens);

  return oAuth2Client;
}

async function listFiles(auth: any) {
  const drive = google.drive({ version: "v3", auth });

  const res = await drive.files.list({
    q: "mimeType='image/jpeg'", // example query to get only JPEG files
    fields: "nextPageToken, files(id, name)",
  });

  const files = res.data.files;
  if (files.length) {
    console.log("Files:");
    files.map((file: any) => {
      console.log(`${file.name} (${file.id})`);
    });
  } else {
    console.log("No files found.");
  }
}

async function main() {
  const auth = await authenticate();
  await listFiles(auth);
}

main().catch(console.error);
export {};
