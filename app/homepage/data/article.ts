export class Article {

  public slug:string;
  public image:string;
  public date:string;
  public title:string;
  public subtitle:string;

  constructor(elem:any){
    this.slug = elem.uniqueSlug;
    this.image = elem.virtuals.previewImage.imageId;
    this.date = elem.virtuals.updatedAtRelative;
    this.title = elem.title;
    this.subtitle= elem.content.subtitle;
  }
}
