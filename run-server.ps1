$serverPath = "C:\Users\Sezarr\Desktop\Sezarr Insurance"
$port = 3000

Write-Host "Starting server at http://localhost:$port"
Write-Host "Serving files from: $serverPath"
Write-Host "Press Ctrl+C to stop the server"

$process = Start-Process -FilePath "npx" -ArgumentList @('serve', "`"$serverPath`"", '-l', "$port") -NoNewWindow -PassThru

try {
    # Keep the script running
    while ($true) {
        Start-Sleep -Seconds 1
        if ($process.HasExited) {
            Write-Host "Server stopped unexpectedly. Restarting..."
            $process = Start-Process -FilePath "npx" -ArgumentList @('serve', "`"$serverPath`"", '-l', "$port") -NoNewWindow -PassThru
        }
    }
} finally {
    if (-not $process.HasExited) {
        Stop-Process -Id $process.Id -Force
    }
}