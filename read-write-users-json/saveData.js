const fs = require("fs");
const path = require("path");

function saveData(readFolder, readUsers, overwrite) {
  fs.readdir(path.join(__dirname, readFolder), function (err, files) {
    if (err) {
      console.log(err);
    } else {
      console.log(files);

      fs.mkdir(path.join(__dirname, readUsers), function (err) {
        if (err) {
          if (err.code === "EEXIST") {
            console.log("Folder już istnieje");
            return;
          }
          console.log(err);
        } else {
          console.log("Folder został utworzony");
        }
      });

      files.forEach(function (file) {
        fs.readFile(path.join(__dirname, "data", file), function (err, data) {
          if (err) {
            console.log(err);
          } else {
            const users = JSON.parse(data);

            users.forEach(function (user) {
              const fileContent = `name: ${user.name.split(" ")[0]}\nsurname: ${
                user.name.split(" ")[1]
              }\nstreet: ${user.address.street}\nzipCode: ${
                user.address.zipcode
              }\ncity: ${user.address.city}\nphone: ${user.phone}`;

              const fileName = `${user.name}`;

              fs.writeFile(
                path.join(
                  __dirname,
                  readUsers,
                  user.id + " " + fileName + ".txt"
                ),
                fileContent,
                { recursive: overwrite },

                function (err, overwrite) {
                  if ((err, overwrite)) {
                    fs.writeFile;
                    console.log(err);
                  } else {
                    console.log("Plik został utworzony");
                  }
                }
              );
            });

            // console.log(JSON.parse(data));
          }
        });
      });
    }
  });
}

module.exports = saveData;
