import { Module } from "@nestjs/common"
import { PrismaModule } from "prisma/prisma.module"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { ConfigModule } from "@nestjs/config"
import { TasksModule } from "./tasks/task.module"

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		PrismaModule,
		TasksModule,
		UsersModule,
		AuthModule
	]
})
export class AppModule {}