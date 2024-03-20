
import { Input, Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";


const Search = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val) => {
      nav(`/movie/search/${val.query}`);
    }
  });

  return (

    <form onSubmit={formik.handleSubmit} className="relative flex w-full max-w-[30rem] msm:mb-4">

      <Input
        onChange={formik.handleChange}
        value={formik.values.query}
        type="text"
        name="query"
        label="Search For Movie"
        className="pr-20 bg-white"
      />
      <Button
        type="submit"
        size="sm"

        className="!absolute  right-1 bg-[#0CC1CD] top-1 rounded"
      >
        Search
      </Button>
    </form>
  )
}
export default Search