function tagify (tag) {
  if (tag.indexOf('#') === -1) {
    tag = '%23' + tag
  } else {
    tag = tag.replace('#', '%23')
  }
  return tag
}

export default {
  tagify,
}