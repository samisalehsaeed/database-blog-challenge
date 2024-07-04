const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice", email: "aliceisthebest@gmail.com" },
      { username: "zema", email: "zema@gmail.com" },
      { username: "sami", email: "sami@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        url: "pic-of-alice.jpg",
        bio: "i love life",
        userId: 1,
      },
      {
        url: "pic-of-zema.jpg",
        bio: "im the best",
        userId: 2,
      },
      {
        url: "pic-of-sami.jpg",
        bio: "zema is the best",
        userId: 3,
      },
    ],
  });

  const createdPost = await prisma.post.createMany({
    data: [
      {
        userId: 1,
        title: "my dog is so cool",
        published: true,
        pictureUrl: "mydog.jpg",
      },
      {
        userId: 1,
        title: "my dog is still so cool",
        published: true,
        pictureUrl: "mydog2.jpg",
      },
      {
        userId: 2,
        title: "my pc is so cool",
        published: true,
        pictureUrl: "mypc.jpg",
      },
      {
        userId: 2,
        title: "my pc is still so cool",
        published: true,
        pictureUrl: "mypc2.jpg",
      },
      {
        userId: 3,
        title: "my cat is so cool",
        published: true,
        pictureUrl: "mycat.jpg",
      },
      {
        userId: 3,
        title: "my cat is still so cool",
        published: true,
        pictureUrl: "mycat.jpg",
      },
    ],
  });

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        postId: 3,
        userId: 1,
        content: "amazing",
      },
      {
        postId: 4,
        userId: 1,
        content: "amazing",
      },
      {
        postId: 3,
        userId: 2,
        content: "amazing",
      },
      {
        postId: 5,
        userId: 2,
        content: "amazing",
      },
    ],
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
