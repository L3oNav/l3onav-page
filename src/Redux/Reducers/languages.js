export const Languages = {
	ES: {
		name: 'ES',
		job: 'Desarrollador Web con Reactjs y Django.',
		title: 'Hola Mundo!',
		biography:
			'Soy Leonardo Nava, estudiaré física, me gustaría ser un científico de datos. Me gusta aprender cosas nuevas todos los días, así es como aprendí a programar, aprendiendo solo, después de unos meses descubrí platzi donde realmente fue un cambio en mi aprendizaje. Soy alguien a quien le gusta leer mucho, leo fantasía épica, matemáticas, física, hago mi mejor esfuerzo para mejorar día a día.',
		buttons: [
			{ id: 1, title: 'Inicio', to: '/' },
			{ id: 2, title: 'Certificados', to: '/certificates' },
			{ id: 3, title: 'Proyectos', to: '/projects' }
		]
	},
	US: {
		name: 'US',
		job: 'Web app developer with ReactJs and Django.',
		title: 'Hello, World',
		biography:
			'I am Leonardo Nava, I will study physics, I would like to be a data scientist. I like learning new things every day, this is how I learned to program, learning alone, after a few months I discovered platzi where it really was a change in my learning. I am someone who likes to read a lot, I read epic fantasy, math, physics, I do my best to improve day by day.',
		buttons: [
			{ id: 1, title: 'Home', to: '/' },
			{ id: 2, title: 'Certificates', to: '/certificates' },
			{ id: 3, title: 'Projects', to: '/projects' }
		]
	}
};

const initialState = Languages['US'];

export const LanguageReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'changeLanguage':
			return Languages[action.payload];
		case 'getLanguage':
			return {
				...state,
				language: state
			};
		default:
			return state;
	}
};
