const getUsers = (() => {
  return {
    consultarDatos: async () => {
      const url = "https://randomuser.me/api/?results=10";

      try {
        const response = await fetch(url);
        const datos = await response.json();
        const traerDatos = document.getElementById("user-data");

        datos.results.forEach((user) => {
          traerDatos.innerHTML += `
          <img src="${user.picture.large}"/>
          <span${user.name.first} ${user.name.last}</h><br/>
          <span>${user.email}</span><br/>
          <span>${user.phone}</span><br/><br/>
          
        `;
        });
      } catch (error) {
        console.error("Error al consultar la API", error);
      }
    },
  };
})();

getUsers.consultarDatos();
