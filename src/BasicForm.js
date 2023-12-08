import {useFormik} from "formik";
import * as yup from "yup";
//here we created the table by use formik
//& its validated by yup methoed

//its a validationschema,we write a conditions here
const movieValidationSchema = yup.object({
  email:yup.string()
  .min(8,"Need a bigger email 😊 ")
  .required("A cool email is need"),
  password:yup.string()
  .min(4,"Need a bigger password😊")
  .required("A ccol password is need")
});

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues:{
//       email:"",
//       password:""
//     },
//   //its act like middleware.ie:while condtion pass in validationschema,then only its allow the program to execute the OnSubmit:(values)
//     validationSchema:movieValidationSchema,
    
//     onSubmit:(values)=>{
//       console.log("Form values: ",values)
//      }
  
//   })
   
//   return (
//     <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//       <input 
//       //it meants,the initial values already setted on above.show it must show in default value in  input box by this value={}.
//       value={formik.values.email}
//       type="email"
//        placeholder="email"
//        name="email"
//        //here we give work to formik as to read the modifyed values from input field by {formik.handleChange}
//        onChange={formik.handleChange}
//        //If onBlur execute means-->user focus out ie:user touch another felid
//        onBlur={formik.handleBlur}>
       
//       </input>
     
//       {/* here show case what error occure..
//       this error are given by validationschema until the condtion pass */}
//       {/* {formik.errors.email} */}
      
//      {/* conditional rendering use:bcz,we provide smooth User experience.
//      ie:If error in email field,If user click on another feild,then only we show the errors  */}
//       {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      
//       <input 
//       value={formik.values.password}
//       type="password" 
//       placeholder="password"
//        name="password"
//        onChange={formik.handleChange}
//        onBlur={formik.handleBlur}></input>
//          {/* {formik.errors.password} */}
//          {formik.touched.password && formik.errors.password ? formik.errors.password : null}
     
//      {/* <h2>Errors</h2>
//      <pre>{JSON.stringify(formik.errors)}</pre>
//      <h2>Touched</h2>
//      <pre>{JSON.stringify(formik.touched)}</pre>
//       */}
     
     
//       {/* why we give type="submit",because,the form may contain many buttons.
//       so,we must diffrentiate the submit button from others */}
//       <button type="submit">submit</button>
//     </form>
//     //Flow--.bUTTON CLICK-->onSubmit triggered-->its triger the onSubmit:(values)
//   );
// }
export function BasicForm() {
  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues:{
      email:"",
      password:""
    },
  //its act like middleware.ie:while condtion pass in validationschema,then only its allow the program to execute the OnSubmit:(values)
    validationSchema:movieValidationSchema,
    
    onSubmit:(values)=>{
      console.log("Form values: ",values)
     }
  
  })
   
  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input 
      //it meants,the initial values already setted on above.show it must show in default value in  input box by this value={}.
      value={values.email}
      type="email"
       placeholder="email"
       name="email"
       //here we give work to formik as to read the modifyed values from input field by {formik.handleChange}
       onChange={handleChange}
       //If onBlur execute means-->user focus out ie:user touch another felid
       onBlur={handleBlur}>
       
      </input>
     
      {/* here show case what error occure..
      this error are given by validationschema until the condtion pass */}
      {/* {formik.errors.email} */}
      
     {/* conditional rendering use:bcz,we provide smooth User experience.
     ie:If error in email field,If user click on another feild,then only we show the errors  */}
      {touched.email && errors.email ? errors.email : null}
      
      <input 
       type="password" 
       placeholder="password"
       value={values.password}
       name="password"
       onChange={handleChange}
       onBlur={handleBlur}></input>
         {/* {formik.errors.password} */}
         {touched.password && errors.password ? errors.password : null}
     
     {/* <h2>Errors</h2>
     <pre>{JSON.stringify(formik.errors)}</pre>
     <h2>Touched</h2>
     <pre>{JSON.stringify(formik.touched)}</pre>
      */}
     
     
      {/* why we give type="submit",because,the form may contain many buttons.
      so,we must diffrentiate the submit button from others */}
      <button type="submit">submit</button>
    </form>
    //Flow--.bUTTON CLICK-->onSubmit triggered-->its triger the onSubmit:(values)
  );
}
