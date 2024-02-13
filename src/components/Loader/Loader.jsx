import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loaderWrapper}>
        <DNA
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClassName={css.loader}
        />
      </div>
    </div>
  );
};

export default Loader;
