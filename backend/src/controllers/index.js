const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getVehicleTypes = async (req, res) => {
  const { wheel } = req.query;
  const types = await prisma.vehicleType.findMany({ where: { wheels: parseInt(wheel) } });
  res.json(types);
};

exports.getVehicles = async (req, res) => {
  const { typeId } = req.query;
  const vehicles = await prisma.vehicle.findMany({ where: { typeId: parseInt(typeId) } });
  res.json(vehicles);
};

exports.bookVehicle = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  const overlappingBooking = await prisma.booking.findFirst({
    where: {
      vehicleId: parseInt(vehicleId),
      OR: [
        {
          startDate: { lte: new Date(endDate) },
          endDate: { gte: new Date(startDate) },
        },
      ],
    },
  });

  if (overlappingBooking) {
    return res.status(400).json({ message: 'Vehicle already booked for selected dates' });
  }

  const user = await prisma.user.create({ data: { firstName, lastName } });

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      vehicleId: parseInt(vehicleId),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    },
  });

  res.json(booking);
};
