import axios from "axios";

export const ApiBaseURL =
  "https://get.taaghche.com/v2/everything?filters=%7B%22list%22:%5B%7B%22type%22:3,%22value%22:164%7D,%7B%22type%22:21,%22value%22:0%7D,%7B%22type%22:50,%22value%22:0%7D%5D%7D&offset=0-0-16-16&order=1";

export const Fetch = axios.create({
  baseURL: ApiBaseURL,
});
