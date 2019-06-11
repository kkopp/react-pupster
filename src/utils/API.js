import axios from "axios";

export default {
    newDogImage: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    breedList: function() {
        return axios.get("https://dog.ceo/api/breeds/list")
    }
}