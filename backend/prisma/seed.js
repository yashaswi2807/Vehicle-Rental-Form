const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Vehicle types
  const hatchback = await prisma.vehicleType.create({ data: { name: 'Hatchback', wheels: 4 } });
  const suv = await prisma.vehicleType.create({ data: { name: 'SUV', wheels: 4 } });
  const sedan = await prisma.vehicleType.create({ data: { name: 'Sedan', wheels: 4 } });
  const cruiser = await prisma.vehicleType.create({ data: { name: 'Cruiser', wheels: 2 } });

  // Vehicles
  await prisma.vehicle.createMany({
    data: [
      { name: 'Maruti Swift', typeId: hatchback.id },
      { name: 'Hyundai Creta', typeId: suv.id },
      { name: 'Honda City', typeId: sedan.id },
      { name: 'Royal Enfield Classic', typeId: cruiser.id }
    ]
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
