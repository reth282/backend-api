import { Injectable, UnauthorizedException } from '@nestjs/common';
import { admin } from '../firebase.config';

@Injectable()
export class AuthService {
  async processGoogleSignIn(googleIdToken: string): Promise<string> {
    try {
      // 1. Verify Google ID Token with Firebase Admin
      const decodedToken = await admin.auth().verifyIdToken(googleIdToken);
      
      const { uid } = decodedToken;

      // 2. Business logic (Optional but recommended)
      // Here you would typically check your own database
      // const user = await this.usersService.findOrCreateByUid(uid, email);
      // if (user.isBanned) {
      //   throw new UnauthorizedException('Usuario bloqueado');
      // }

      // 3. Create Firebase Custom Token
      const firebaseCustomToken = await admin.auth().createCustomToken(uid);

      return firebaseCustomToken;
      
    } catch (error) {
      console.error('Error in processGoogleSignIn:', error);
      throw new UnauthorizedException('Token de Google inválido o expirado');
    }
  }
}
