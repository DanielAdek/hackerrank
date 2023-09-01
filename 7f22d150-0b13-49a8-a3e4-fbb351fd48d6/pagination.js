module.exports = (dataSet, page = 0, limit = 3) => {
  const chunked = [];

  for (let i = 0; i < dataSet.length; i++) {
    const lastElement = chunked[chunked.length - 1];

    if (!lastElement || lastElement.length === limit)
      chunked.push([dataSet[i]]);
    else
      lastElement.push(dataSet[i]);
  }

  return {
    data: chunked[page - 1 === -1 ? 0 : page - 1] || [],
    current: page,
    next: page + 1 > dataSet.length ? null : page + 1,
    previous: page - 1 === 0 ? null : page - 1
  }
}