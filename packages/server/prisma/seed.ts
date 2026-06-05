import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
   // Clean up existing data
   await prisma.summary.deleteMany({});
   await prisma.review.deleteMany({});
   await prisma.product.deleteMany({});

   // Create a product with ID 4 and associated reviews
   const product = await prisma.product.create({
      data: {
         id: 4,
         name: 'Wireless Noise-Canceling Headphones',
         description:
            'High-quality wireless headphones with active noise cancellation and 30-hour battery life.',
         price: 299.99,
         reviews: {
            create: [
               {
                  author: 'John Doe',
                  rating: 5,
                  content:
                     'These headphones are absolutely amazing! The sound quality is crisp and the active noise cancellation works wonders on my daily commute. Battery life is fantastic too.',
               },
               {
                  author: 'Jane Smith',
                  rating: 4,
                  content:
                     'Very comfortable to wear for long periods. Sound is great, though the bass could be slightly punchier. Highly recommend overall.',
               },
               {
                  author: 'Alex Johnson',
                  rating: 2,
                  content:
                     'Sound is good but they keep disconnecting from my phone. Also, the active noise cancellation makes me feel a bit dizzy after a while. Returning them.',
               },
               {
                  author: 'Emily Davis',
                  rating: 5,
                  content:
                     'Best headphones I have ever owned. The ANC blocks out all office noise and they charge super fast via USB-C.',
               },
            ],
         },
      },
   });

   console.log('Database seeded successfully:', product);
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
