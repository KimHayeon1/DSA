const permute = (nums) => {
  const result = [];
  const prev_elements = [];

  const dfs(elements) {
    if (elements.length === 0) {
      result.push([...prev_elements]);
    }

    elements.forEach((element, i) => {
      const next_elements = [...elements];
      next_elements.splice(i, 1);

      prev_elements.push(element);
      dfs(next_elements);
      prev_elements.pop();
    });
  }

  dfs(nums);
  return result;
}

permute([1, 2, 3]);
