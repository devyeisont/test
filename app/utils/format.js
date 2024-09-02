/**
 * Formats a name by capitalizing the first letter of each word and converting the rest to lowercase.
 *
 * @param {string} name - The name string to format.
 * @returns {string} - The formatted name with each word capitalized.
 *
 * @example
 * // returns "John Doe"
 * formatName("jOhN doE");
 */
export const formatName = (name) => {
  return name
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

//formatTeacherName
export const formatTeacherName = ({ firstName, lastName }) => {
  return {
    firstName: formatName(firstName),
    lastName: formatName(lastName),
  };
};
/**
 * Formats the first and last names of teachers by capitalizing the first letter of each word.
 *
 * @param {Array<{ firstName: string, lastName: string }>} teachers - Array of teacher objects to format.
 * @returns {Array<{ firstName: string, lastName: string }>} - Array of teacher objects with formatted names.
 *
 * @example
 * // returns [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }]
 * formatTeacherNames([{ firstName: "joHN", lastName: "dOe" }, { firstName: "JANe", lastName: "SMITH" }]);
 */
export const formatTeacherNames = (teachers) => {
  return teachers.map((teacher) => ({
    ...teacher,
    firstName: formatName(teacher.firstName),
    lastName: formatName(teacher.lastName),
  }));
};

/**
 * Truncates a description to a specified maximum length and adds ellipses if the description exceeds the limit.
 *
 * @param {string} description - The description text to truncate.
 * @param {number} maxLength - The maximum allowed length for the description.
 * @returns {string} - The truncated description with ellipses if necessary.
 *
 * @example
 * // returns "This is a long desc..."
 * truncateDescription("This is a long description that needs to be truncated.", 20);
 */
export const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
};

/**
 * Extracts 'otp' and 'playbackInfo' from a given URL.
 *
 * @param {string} url - The URL containing the otp and playbackInfo parameters.
 * @returns {{ otp: string, playbackInfo: string }} - An object containing the extracted otp and playbackInfo.
 */
export const extractVideoParams = (url) => {
  if (!url || url === '') {
    return {
      otp: null,
      playbackInfo: null,
    };
  }
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);

  const otp = params.get('otp');
  const playbackInfo = params.get('playbackInfo');

  return { otp, playbackInfo };
};
