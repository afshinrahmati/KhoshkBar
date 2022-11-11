import { Injectable } from "@nestjs/common";
import { Slider } from "src/types/slider";
import { I18n, I18nContext } from 'nestjs-i18n';

@Injectable()
export class AppService {
  getHello(@I18n() i18n: I18nContext):any {

    return { username: i18n.t("messgae.HELLO"),t:i18n };
  }
}
