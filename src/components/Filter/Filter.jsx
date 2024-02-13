import css from './Filter.module.css';

const Filter = ({ onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onChange(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="query" className={css.inputField} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
