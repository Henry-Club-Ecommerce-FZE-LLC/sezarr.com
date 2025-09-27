$serviceName = "SezarrInsuranceServer"
$displayName = "Sezarr Insurance Web Server"
$description = "Web server for Sezarr Insurance website"
$websitePath = "C:\Users\Sezarr\Desktop\Sezarr Insurance"
$nodePath = (Get-Command node).Source
$npxPath = (Get-Command npx).Source

# Check if service exists
$service = Get-Service -Name $serviceName -ErrorAction SilentlyContinue

if ($service) {
    Write-Host "Service already exists. Stopping and removing..."
    Stop-Service -Name $serviceName
    $service.WaitForStatus('Stopped')
    sc.exe delete $serviceName
    Start-Sleep -Seconds 2
}

# Create the service using NSSM (Non-Sucking Service Manager)
# First, download NSSM if not present
$nssmPath = "C:\Windows\System32\nssm.exe"
if (-not (Test-Path $nssmPath)) {
    $nssmUrl = "https://nssm.cc/release/nssm-2.24.zip"
    $nssmZip = "$env:TEMP\nssm.zip"
    $nssmExtract = "$env:TEMP\nssm"
    
    Write-Host "Downloading NSSM..."
    Invoke-WebRequest -Uri $nssmUrl -OutFile $nssmZip
    
    Write-Host "Extracting NSSM..."
    Expand-Archive -Path $nssmZip -DestinationPath $nssmExtract -Force
    
    Write-Host "Installing NSSM..."
    Copy-Item "$nssmExtract\nssm-2.24\win64\nssm.exe" $nssmPath -Force
    
    Remove-Item $nssmZip -Force
    Remove-Item $nssmExtract -Recurse -Force
}

Write-Host "Creating service with NSSM..."
& $nssmPath install $serviceName $npxPath
& $nssmPath set $serviceName AppParameters "serve -p 3000"
& $nssmPath set $serviceName AppDirectory $websitePath
& $nssmPath set $serviceName DisplayName $displayName
& $nssmPath set $serviceName Description $description
& $nssmPath set $serviceName Start SERVICE_AUTO_START
& $nssmPath set $serviceName AppStdout "$websitePath\server.log"
& $nssmPath set $serviceName AppStderr "$websitePath\server-error.log"

Write-Host "Starting service..."
Start-Service -Name $serviceName

Write-Host "Service installation complete. The server will start automatically on system boot."
Write-Host "You can access the site at: http://localhost:3000"
Write-Host "To stop the server, run: Stop-Service -Name '$serviceName'"
Write-Host "To start the server, run: Start-Service -Name '$serviceName'"
Write-Host "Logs are available at: $websitePath\server.log and $websitePath\server-error.log"