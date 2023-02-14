import { createSlice } from "@reduxjs/toolkit";
const getIndex = (list, item) => {
  var index = 0;
  for (; index < list.length; index++) {
    // advances index
    if (item.studying || item.working) {
      // handles Presently studying/ working cases
      if (item.jDate > list[index].jDate) {
        // sorting by Joining dates
        break;
      }
    } else {
      if (list[index].studying || list[index].working) continue;
      else if (item.eDate > list[index].eDate) {
        // compares eDate
        break;
      } else if (item.eDate == list[index].eDate) {
        // if equal
        if (item.jDate > list[index].jDate) {
          // compares jDates
          break;
        }
      }
    }
  }
  return index;
};
const resume = createSlice({
  name: "resume",
  initialState: {
    name: "",
    email: "",
    phone: "",
    country: "",
    photo: "",
    profile: "",
    employment: [],
    education: [],
    projects: [],
    urls: [],
    skills: [],
    languages: [],
    references: [],
    tempData: { data: undefined, disabled: false },
    editData: {},
  },
  reducers: {
    changeName(state, action) {
      var words = action.payload.split(" ");
      var name = "";
      if (action.payload.length)
        words.map(
          (word) =>
            (name += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
        );
      state.name = name;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePhone(state, action) {
      state.phone = action.payload;
    },
    changeCountry(state, action) {
      state.country = action.payload;
    },
    changePhoto(state, action) {
      state.photo = action.payload;
    },
    changeProfile(state, action) {
      state.profile = action.payload;
    },
    changeEmployment(state, action) {
      if (action.payload.delete) {
        state.employment.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        state.employment.splice(action.payload.index, 1);

        var index = getIndex(state.employment, action.payload.data);
        state.employment.splice(index, 0, action.payload.data);

        return;
      }
      var index = getIndex(state.employment, action.payload);
      state.employment.splice(index, 0, action.payload);
    },
    changeEductaion(state, action) {
      if (action.payload.delete) {
        state.education.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        state.education.splice(action.payload.index, 1);

        var index = getIndex(state.education, action.payload.data);
        state.education.splice(index, 0, action.payload.data);

        return;
      }
      var index = getIndex(state.education, action.payload);
      state.education.splice(index, 0, action.payload);
    },
    changeProjects(state, action) {
      if (action.payload.delete) {
        state.projects.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        state.projects[action.payload.index] = action.payload.data;
        return;
      }
      state.projects.push(action.payload);
    },
    changeURL(state, action) {
      if (action.payload.delete) {
        state.urls.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        var words = action.payload.data.site.split(" "); // title case conversion
        var name = "";
        if (action.payload.data.site.length)
          words.map(
            (word) =>
              (name +=
                word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
          );
        var temp = { ...action.payload.data };
        temp.site = name;

        state.urls[action.payload.index] = temp;
        return;
      }

      var words = action.payload.site.split(" "); // title case conversion
      var name = "";
      if (action.payload.site)
        words.map(
          (word) =>
            (name += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
        );
      var temp = { ...action.payload };
      temp.site = name;

      state.urls.push(temp);
    },
    changeSkills(state, action) {
      state.skills = action.payload;
    },
    changeLanguages(state, action) {
      state.languages = action.payload;
    },
    changeReferences(state, action) {
      if (action.payload.delete) {
        state.references.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        state.references[action.payload.index] = action.payload.data;
        return;
      }
      state.references.push(action.payload);
    },
    changeTemp(state, action) {
      state.tempData = action.payload;
    },
    changeEditData(state, action) {
      state.editData = action.payload;
    },
  },
});

export const {
  changeName,
  changeEmail,
  changePhone,
  changeCountry,
  changePhoto,
  changeProfile,
  changeEmployment,
  changeEductaion,
  changeProjects,
  changeURL,
  changeSkills,
  changeLanguages,
  changeReferences,
  changeTemp,
  changeEditData,
} = resume.actions;
export default resume.reducer;
