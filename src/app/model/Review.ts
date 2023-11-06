export class Review {
  reviewId: number = 0;
  comment: string = '';
  rating: number = 0;
  reviewDate: Date = new Date(Date.now());
  status: string = '';
  userappId: number = 0;
  professorId: number = 0;
  courseId: number = 0;
}
