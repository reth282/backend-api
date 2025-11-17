import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleTokenDto } from './dto/google-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google')
  @UsePipes(new ValidationPipe())
  async signInWithGoogle(@Body() googleTokenDto: GoogleTokenDto) {
    const { googleIdToken } = googleTokenDto;
    
    // 1. Call the service for token exchange
    const firebaseCustomToken = await this.authService.processGoogleSignIn(googleIdToken);
    
    // 2. Return the Custom Token to the client
    return { firebaseCustomToken };
  }
}
