const FormError = ({ errorMsg }) => {
  return (
    <div className="text-sm font-medium text-center text-red-800 bg-red-100 border border-red-800 py-2 px-4 rounded-lg wrap-break-word">
      {errorMsg}
    </div>
  );
};

export default FormError;
