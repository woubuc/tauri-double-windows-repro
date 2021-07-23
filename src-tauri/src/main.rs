#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use tauri::WindowUrl;

fn main() {
	tauri::Builder::default()
		.setup(|app| {
			app.create_window(
				"test".into(),
				WindowUrl::App("".into()),
				|builder, attrs| (builder, attrs)
			).expect("Could not create window");

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}
