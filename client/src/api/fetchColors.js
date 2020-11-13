import { axiosWithAuth } from '../utils/axiosWithAuth'


export const fetchColors = () => {
    return axiosWithAuth()
        .get("/api/colors")
        .then((res) => {
            return res
            // setColorList(res.data);
        })
        .catch((err) => {
            return err
        });
}
