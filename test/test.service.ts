import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { Contact, User } from '@prisma/client';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteAll() {
    await this.deleteUser();
  }

  //   USER
  async createUser() {
    await this.prismaService.user.create({
      data: {
        username: 'test',
        name: 'test',
        password: await bcrypt.hash('test', 10),
        token: 'test',
      },
    });
  }

  async getUser(): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        username: 'test',
      },
    });
    if (!user) throw new Error('User not found');
    return user;
  }

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        username: 'test',
      },
    });
  }

  //   CONTACT

  async createContact() {
    await this.prismaService.contact.create({
      data: {
        first_name: 'test',
        last_name: 'test',
        email: 'test@example.com',
        phone: '9999',
        username: 'test',
      },
    });
  }

  async getContact(): Promise<Contact> {
    const contact = await this.prismaService.contact.findFirst({
      where: {
        username: 'test',
      },
    });
    if (!contact) throw new Error('Contact not found');
    return contact;
  }
}
