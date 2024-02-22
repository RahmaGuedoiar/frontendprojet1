import { configureStore } from "@reduxjs/toolkit";
import product_slice from './slices/sliceproduct'
export default configureStore({ reducer:{productadmin:product_slice}})