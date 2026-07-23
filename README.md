# Sonnenhaus Kindergarten PWA

Mobile-first MVP für Kindergartenfamilien mit Dashboard, Kalender, Mitteilungen, Onboarding-Checkliste und grundlegender Offline-Unterstützung.

## Lokal starten

```bash
npm install
npm run dev
```

Danach `http://localhost:3000` öffnen.

## Auf GitHub Pages veröffentlichen

1. Ein neues GitHub-Repository anlegen.
2. Den gesamten Projektinhalt in das Repository hochladen.
3. Als Standard-Branch `main` verwenden.
4. Unter **Settings → Pages → Build and deployment** als Quelle **GitHub Actions** auswählen.
5. Einen Commit auf `main` pushen.
6. Unter **Actions** warten, bis „Deploy to GitHub Pages“ erfolgreich abgeschlossen ist.

Die Seite ist anschließend typischerweise unter folgender Adresse erreichbar:

```text
https://DEIN-BENUTZERNAME.github.io/DEIN-REPOSITORY/
```

Der Workflow setzt den Repository-Namen automatisch als Next.js-Base-Path. Dadurch funktionieren JavaScript, CSS, Manifest, Icons und Service Worker auch in einem GitHub-Pages-Unterverzeichnis.

## Lokal einen GitHub-Pages-Build testen

Ersetze `kindergarten-pwa` durch deinen tatsächlichen Repository-Namen:

### macOS/Linux

```bash
NEXT_PUBLIC_BASE_PATH=/kindergarten-pwa npm run build
npx serve out
```

### PowerShell

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/kindergarten-pwa"
npm run build
npx serve out
```

## Technische Grenzen

GitHub Pages stellt nur statische Dateien bereit. Das MVP funktioniert dort, aber sichere Logins, Datenbanken, vertrauliche Kinderdaten, Uploads, serverseitige Formulare und echte Push-Benachrichtigungen benötigen später einen separaten Backend-Dienst.

Vor der Speicherung personenbezogener Daten von Kindern sind insbesondere Rollen- und Rechtekonzept, Verschlüsselung, Löschfristen, Auftragsverarbeitung und eine DSGVO-Prüfung erforderlich.
