import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    weather: weatherSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
