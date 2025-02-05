import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { LocalStrategy } from "./strategies/local.strategy"
import { UsersModule } from "src/users/users.module"
import { JwtModule } from "@nestjs/jwt"

@Module({
	imports: [UsersModule, JwtModule.register({})],
	controllers: [AuthController],
	providers: [
		AuthService,
		LocalStrategy,
	]
})
export class AuthModule {}