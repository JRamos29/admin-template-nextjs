import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const ctx = useAppData();

  return (
    <Layout title="Notifications Page" subtitle="Manage your notifications...">
      <h3>{ctx.name}</h3>
    </Layout>
  );
}
