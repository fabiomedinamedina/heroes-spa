import { UserProvider } from './auth/context/UserProvider';
import { AppRouter } from './router/AppRouter';

export const HeroApp = () => {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
};
