import moment from "moment";
import { DATE_FORMATS } from "./format";

/**
 * “Deprecation warning: moment construction falls back to js Date” when trying to convert RFC2822 date in moment.js 
 * https://stackoverflow.com/a/46410816/9023855
 */
(moment as any).suppressDeprecationWarnings = true;

/**
 * Date parser that can only reveal valid .date or .moment
 */
export class Parser {
  public moment: moment.Moment | null = null;

  constructor(public s: string, formats: string[] = []) {
    for (const f of [...DATE_FORMATS, ...formats]) {
      this.moment = moment(s, f);
      if (this.moment.isValid()) {
        break;
      } else {
        this.moment = null;
      }
    }

    if (this.moment) {
      this.moment = moment(s);
      if (!this.moment.isValid()) {
        this.moment = null;
      }
    }
  }

  get date(): Date | null {
    return this.moment ? this.moment.toDate() : null;
  }
}

/**
 * Convert string to Date only if is valid ISO 8601, RFC 2822, or local formats. Can specify additional formats.
 * @param s 
 * @param formats 
 */
export function toDate(s: string, formats: string[] = []): Date | null {
  return new Parser(s, formats).date;
}

/**
 * Convert string to moment only if is valid ISO 8601, RFC 2822, or local formats. Can specify additional formats.
 * @param s 
 * @param formats 
 */
export function toMoment(s: string, formats: string[] = []): moment.Moment | null {
  return new Parser(s, formats).moment;
}
