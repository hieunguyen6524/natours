class APIFeatures {
  // queryString là các req.query từ url như /reviews?rating=4 thì
  // query là chuỗi truy vấn hiện tại như Model.find() sau khi vào đây thì dựa vào queryString mà sẽ thêm vào query như rating=4 thì query là Model.find().fillter(rating":"4")
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    // Chuyển các gte, gt, lte, lt về $gte,... để thực hiện query (dùng regex để replace chúng)
    // { difficulty: 'easy', duration: { gte: '5' } }
    // { difficulty: 'easy', duration: { $gte: '5' } }
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
      // sort sẽ sắp xếp tăng dần theo lần lượt các tham số truyền vào sort('price ratingAverage')
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v ');
    }
    return this;
  }

  paginate() {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 100;
    const skip = (page - 1) * limit;
    // page=2&limit=10, page 1: 1-10, page 2: 11-20, page 3: 21-30, ...
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
