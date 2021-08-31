export class Formatter {
  public formatter(str: string | number, separator: string): string {
    let val = Number(str).toFixed().split('.');
    return val[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator) + (val.length > 1 ? ',' + val[1] : '');
  };
}
