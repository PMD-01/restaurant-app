import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, password, role } = data;

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'Cet email est déjà utilisé.' }, { status: 400 });
  }

  // Si aucun admin n'existe, le premier utilisateur est admin
  let userRole = role;
  const adminExists = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
  if (!adminExists) {
    userRole = 'ADMIN';
  }

  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: userRole || 'WAITER',
    },
  });

  return NextResponse.json({ message: 'Inscription réussie', user: { id: user.id, email: user.email, role: user.role } });
} 