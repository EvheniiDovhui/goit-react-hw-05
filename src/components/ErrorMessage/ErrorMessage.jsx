import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;
