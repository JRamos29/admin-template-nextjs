import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import loadingImg from '../../../public/images/loading.gif';
import useAuth from '../../data/hook/useAuth';

interface RequireAuthProps {
  children: any;
}

export default function RequireAuth(props: RequireAuthProps) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes('admin-template-nextjs-auth')) {
                          window.location.href = "/auth"
                      }`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loadingImg} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/auth');
    return null;
  }
}
