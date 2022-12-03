import axios from "axios";

import { baseUrl } from "../../config";
const AddImage = (props) => {
  const upload = (e) => {
    let file = e.target.files[0];

    const formData = new FormData();
    formData.append("photo", file);

    const url = baseUrl + "upload";

    axios.post(url, formData).then((response) => {
      props.setValues({ ...props.values, image: response.data.filename });
    });
  };

  return (
    <div>
      <input type="file" name="file" onChange={upload} />;
    </div>
  );
};
export default AddImage;
