import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../app-route';
import styles from './not-found-page.module.css';

function NotFoundPage(): React.JSX.Element {
  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <p className={`${styles.statusText}`}>404 Not Found</p>
      <p className={`${styles.actionText}`}>
        Return to the{' '}
        <Link className={`${styles.link}`} to={AppRoute.Catalog}>
          main page
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
