import { FileType, PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fileCategory1 = await prisma.fileCategory.create({
    data: {
      name: "Introduction",
      subtitle:
        "Detailed Information of Workbook & HRIS dataset of Mr. Macky's",
    },
  });

  const fileCategory2 = await prisma.fileCategory.create({
    data: {
      name: "Module 1",
      subtitle: "Summary Information",
      description:
        "You will conduct analytics that provide basic foundational information about Mr. Macky's. In this module, you will find out summary information about current employees, employees employed by Mr. Macky's over the past few years, and the various restaurant units of the restaurant chain. Information determined in this module will help set up analyses for future modules.",
    },
  });

  const fileCategory3 = await prisma.fileCategory.create({
    data: {
      name: "Module 2",
      subtitle:
        "Performance & Turnover",
      description:
        "Module 2 pushes you to consider in detail the effects associated with managerial performance ratings, and particularly to examine the relationship between job performance ratings and unit performance. The module then moves into considering the predictors and consequences of employee turnover. This includes by modeling how turnover rates relate to unit performance, as well as developing turnover models to predict the likelihood that individual employees will leave the organization.",
    },
  });

  const fileCategory4 = await prisma.fileCategory.create({
    data: {
      name: "Module 3",
      subtitle:
        "Engagement, Diversity, & Selection",
        description:
          "In Module 3, you will explore issues associated with engagement, diversity, and selection. This module will have you explore issues associated with the measure of employee engagement. It will also examine how successful Mr. Macky's has been in its selection efforts, both in terms of the performance ratings of those hired and the diversity of its recruitment and compensation practices. You will also look into what options Mr. Macky's has with respect to the design of a new selection system and explore ways that Mr. Macky's can improve the quality of its managerial hires. You will also help evaluate the different selection devices and their relative effectiveness.",
    },
  });

  const fileCategory5 = await prisma.fileCategory.create({
    data: {
      name: "Module 4",
      subtitle:
        "Employee Development & Compensation",
        description:
          "In Module 4, you will engage in HR Analytics associated with employee development and compensation. Although Mr. Macky's does not provide much in the way of training, you can look at how employees develop within the organization. In this module, you will explore how much value there is to the organization in accumulating organizational experience. You will also try to understand how the company rewards performance and how effective their compensation practices are for incentivizing future performance and retaining high performers.",
    },
  });

  const fileCategory6 = await prisma.fileCategory.create({
    data: {
      name: "Module 5",
      subtitle:
        "Detailed Information of Workbook & HRIS dataset of Mr. Macky's",
        description:
          "Module 5 covers all aspects of analytics covered in the course. It includes questions related to individual functions covered in the earlier modules, as well as analytics associated with multiple functional areas. It also provides questions related to the overall impact of various HR functions.",
    },
  });

  const fileUserRoleAll = {
    createMany: {
      data: [
        {
          userRole: UserRole.PROFESSOR
        },
        {
          userRole: UserRole.STUDENT
        }
      ]
    }
  }
  const fileUserRoleProfessors = {
    createMany: {
      data: [
        {
          userRole: UserRole.PROFESSOR
        },
      ]
    }
  }
  
  // (Introduction) File Category 1 files
  const file1 = await prisma.file.create({
    data: {
      name: "Introduction PDF File",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory1.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })

  // (Module 1) File Category 2 files
  const file2 = await prisma.file.create({
    data: {
      name: "Module 1 Questions",
      type: FileType.WORKSHEET,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory2.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file3 = await prisma.file.create({
    data: {
      name: "Answer Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory2.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file4 = await prisma.file.create({
    data: {
      name: "Grading Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory2.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
  const file5 = await prisma.file.create({
    data: {
      name: "Answer Keys",
      type: FileType.ANSWER_KEY,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory2.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })

  // (Module 2) File Category 3 files
  const file6 = await prisma.file.create({
    data: {
      name: "Module 2 Questions",
      type: FileType.WORKSHEET,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory3.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file7 = await prisma.file.create({
    data: {
      name: "Answer Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory3.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file8 = await prisma.file.create({
    data: {
      name: "Grading Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory3.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
  const file9 = await prisma.file.create({
    data: {
      name: "Answer Keys",
      type: FileType.ANSWER_KEY,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory3.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })

  // (Module 3) File Category 4 files
  const file10 = await prisma.file.create({
    data: {
      name: "Module 3 Questions",
      type: FileType.WORKSHEET,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory4.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file11 = await prisma.file.create({
    data: {
      name: "Answer Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory4.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file12 = await prisma.file.create({
    data: {
      name: "Grading Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory4.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
  const file13 = await prisma.file.create({
    data: {
      name: "Answer Keys",
      type: FileType.ANSWER_KEY,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory4.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })

  // (Module 4) File Category 5 files
  const file14 = await prisma.file.create({
    data: {
      name: "Module 4 Questions",
      type: FileType.WORKSHEET,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory5.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file15 = await prisma.file.create({
    data: {
      name: "Answer Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory5.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file16 = await prisma.file.create({
    data: {
      name: "Grading Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory5.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
  const file17 = await prisma.file.create({
    data: {
      name: "Answer Keys",
      type: FileType.ANSWER_KEY,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory5.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })

  // (Module 5) File Category 6 files
  const file18 = await prisma.file.create({
    data: {
      name: "Module 5 Questions",
      type: FileType.WORKSHEET,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory6.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file19 = await prisma.file.create({
    data: {
      name: "Answer Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory6.id
        }
      },
      fileUserRoles: fileUserRoleAll
    }
  })
  const file20 = await prisma.file.create({
    data: {
      name: "Grading Sheet",
      type: FileType.DOCUMENT,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory6.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
  const file21 = await prisma.file.create({
    data: {
      name: "Answer Keys",
      type: FileType.ANSWER_KEY,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      category: {
        connect: {
          id: fileCategory6.id
        }
      },
      fileUserRoles: fileUserRoleProfessors
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
