class Job {
  constructor(name, type = 'JReq') {
    this.name = name
    this.type = this._matchJobType(type)
  }
  _matchJobType (type){
      if(type!=='JReq' && type!=='ATS'){
        throw 'Job should either be JReq or ATS type.'
      }
      return type
  }
}
export default Job
