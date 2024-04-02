import { commonrequest } from "./ApiCall";
import {BASE_URL} from "./helper"

export const contactInformation = async (inputText, header) => {
  return await commonrequest("POST",`${BASE_URL}/contactform`,inputText,header);
}