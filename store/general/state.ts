import { SearchParams } from "./model";
import Cookies from 'cookies'
class GeneralState {
  
  public isLoggedIn: boolean = false;
  public isSidebarVisible: boolean = false;
  public searchParams: SearchParams = {
    type: 'all',
    gender: 'all',
    status: 'all',
    city: 'all',
    date: 'all'
  }
}

export { GeneralState }