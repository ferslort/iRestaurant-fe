import Link from 'next/link';
import Quote3 from '../element/quote-3';
import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import { useAuthUser } from '../hooks/useAuthUser';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GET_USER } from '../gql/auth';
import { useQuery } from '@apollo/client';

function Dashboard() {
  const { token, loading } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.push('/login');
    }
  }, [token, loading]);

  const { data, error } = useQuery(GET_USER);
  console.log('🚀 ~ file: useAuthUser.ts ~ line 27 ~ useAuthUser ~ error', error);
  console.log('🚀 ~ file: useAuthUser.ts ~ line 27 ~ useAuthUser ~ data', data);

  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: 'url(images/banner/bnr2.png), var(--gradient-sec)',
            backgroundSize: 'cover, 200%'
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Dashboard</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item -active" aria-current="page">
                    Dashboard
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        <Quote3 />
      </div>
      <Footer3 />
    </>
  );
}

export default Dashboard;
