import { GeneralSaga } from "./general/saga";
import { ProfileSaga } from "./profile/saga";

const sagas = [
  new GeneralSaga(),
  new ProfileSaga()
];

export { sagas };