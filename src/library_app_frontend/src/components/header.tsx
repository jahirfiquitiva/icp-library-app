import { ConnectDialog, useDialog } from '@connect2ic/react';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Button } from './button';
import { useAuth } from '../hooks/auth';

export const Header = () => {
  const { connected, loading, disconnect } = useAuth();
  const { open } = useDialog();

  useEffect(() => {
    if (connected) return;
    open();
  }, [connected]);

  return (
    <header className={'py-8 px-4 bg-slate-100 dark:bg-slate-800 dark:text-slate-100'}>
      <div className={'flex flex-col gap-6 max-w-3xl mx-auto'}>
        <div className={'flex flex-row gap-4 items-center justify-between'}>
          <h1 className={'text-3xl font-semibold'}>Bookstore</h1>
          {connected ? (
            <Button
              onClick={() => {
                disconnect();
              }}>
              Log out
            </Button>
          ) : !loading ? (
            <ConnectDialog />
          ) : null}
        </div>
        {connected ? (
          <nav>
            <ul className={'flex flex-row gap-3 items-center'}>
              <li>
                <Link to={'/'} className={'px-2 py-1 [&.active]:underline'}>
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link to={'/'} className={'px-2 py-1 [&.active]:underline'}>
                  Registrar
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
};
