import * as yup from "yup";
import {
    CAMPO_REQUERIDO,
    VALIDACION_MINIMO_CARACTERES
} from "../../../../utils/Constants";

export const INITIAL_VALUES = {
  title: null
};

export const SCHEMA_VALIDATIONS = {
  title: yup
    .string()
    .required(CAMPO_REQUERIDO)
    .test("validarVacios", CAMPO_REQUERIDO, (value) =>
      value ? value.trim() !== "" : false
    )
    .test("minimoCaracteres", VALIDACION_MINIMO_CARACTERES, (value) =>
      value ? value.length <= 3 ? false : true : true
    ),
};